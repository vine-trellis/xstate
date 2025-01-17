import * as React from 'react';
import { useMachine } from '../src';
import {
  createMachine,
  sendParent,
  assign,
  spawn,
  ActorRef,
  ActorRefFrom,
  SpawnedActorRef
} from 'xstate';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { useActor } from '../src/useActor';
import { useState } from 'react';

afterEach(cleanup);

describe('useActor', () => {
  it('initial invoked actor should be immediately available', (done) => {
    const childMachine = createMachine({
      id: 'childMachine',
      initial: 'active',
      states: {
        active: {}
      }
    });
    const machine = createMachine({
      initial: 'active',
      invoke: {
        id: 'child',
        src: childMachine
      },
      states: {
        active: {}
      }
    });

    const ChildTest: React.FC<{ actor: ActorRefFrom<typeof childMachine> }> = ({
      actor
    }) => {
      const [state] = useActor(actor);

      expect(state.value).toEqual('active');

      done();

      return null;
    };

    const Test = () => {
      const [state] = useMachine(machine);

      return (
        <ChildTest
          actor={state.children.child as ActorRefFrom<typeof childMachine>}
        />
      );
    };

    render(
      <React.StrictMode>
        <Test />
      </React.StrictMode>
    );
  });

  it('invoked actor should be able to receive (deferred) events that it replays when active', (done) => {
    const childMachine = createMachine({
      id: 'childMachine',
      initial: 'active',
      states: {
        active: {
          on: {
            FINISH: { actions: sendParent('FINISH') }
          }
        }
      }
    });
    const machine = createMachine({
      initial: 'active',
      invoke: {
        id: 'child',
        src: childMachine
      },
      states: {
        active: {
          on: { FINISH: 'success' }
        },
        success: {}
      }
    });

    const ChildTest: React.FC<{ actor: ActorRefFrom<typeof childMachine> }> = ({
      actor
    }) => {
      const [state, send] = useActor(actor);

      expect(state.value).toEqual('active');

      React.useEffect(() => {
        send({ type: 'FINISH' });
      }, []);

      return null;
    };

    const Test = () => {
      const [state] = useMachine(machine);

      if (state.matches('success')) {
        done();
      }

      return (
        <ChildTest
          actor={state.children.child as ActorRefFrom<typeof childMachine>}
        />
      );
    };

    render(
      <React.StrictMode>
        <Test />
      </React.StrictMode>
    );
  });

  it('initial spawned actor should be immediately available', (done) => {
    const childMachine = createMachine({
      id: 'childMachine',
      initial: 'active',
      states: {
        active: {}
      }
    });

    interface Ctx {
      actorRef?: ActorRefFrom<typeof childMachine>;
    }

    const machine = createMachine<Ctx>({
      initial: 'active',
      context: {
        actorRef: undefined
      },
      states: {
        active: {
          entry: assign({
            actorRef: () => spawn(childMachine)
          })
        }
      }
    });

    const ChildTest: React.FC<{ actor: ActorRefFrom<typeof childMachine> }> = ({
      actor
    }) => {
      const [state] = useActor(actor);

      expect(state.value).toEqual('active');

      done();

      return null;
    };

    const Test = () => {
      const [state] = useMachine(machine);
      const { actorRef } = state.context;

      return <ChildTest actor={actorRef!} />;
    };

    render(
      <React.StrictMode>
        <Test />
      </React.StrictMode>
    );
  });

  it('spawned actor should be able to receive (deferred) events that it replays when active', (done) => {
    const childMachine = createMachine({
      id: 'childMachine',
      initial: 'active',
      states: {
        active: {
          on: {
            FINISH: { actions: sendParent('FINISH') }
          }
        }
      }
    });
    const machine = createMachine<{
      actorRef?: ActorRefFrom<typeof childMachine>;
    }>({
      initial: 'active',
      context: {
        actorRef: undefined
      },
      states: {
        active: {
          entry: assign({
            actorRef: () => spawn(childMachine)
          }),
          on: { FINISH: 'success' }
        },
        success: {}
      }
    });

    const ChildTest: React.FC<{ actor: ActorRefFrom<typeof childMachine> }> = ({
      actor
    }) => {
      const [state, send] = useActor(actor);

      expect(state.value).toEqual('active');

      React.useEffect(() => {
        send({ type: 'FINISH' });
      }, []);

      return null;
    };

    const Test = () => {
      const [state] = useMachine(machine);

      if (state.matches('success')) {
        done();
      }

      const { actorRef } = state.context;

      return <ChildTest actor={actorRef!} />;
    };

    render(
      <React.StrictMode>
        <Test />
      </React.StrictMode>
    );
  });

  it('actor should provide snapshot value immediately', () => {
    const simpleActor: ActorRef<any, number> & { latestValue: number } = {
      send: () => {
        /* ... */
      },
      latestValue: 42,
      subscribe: () => {
        return {
          unsubscribe: () => {
            /* ... */
          }
        };
      }
    };

    const Test = () => {
      const [state] = useActor(simpleActor, (a) => a.latestValue);

      return <div data-testid="state">{state}</div>;
    };

    const { getByTestId } = render(<Test />);

    const div = getByTestId('state');

    expect(div.textContent).toEqual('42');
  });

  it('should provide value from `actor.getSnapshot()`', () => {
    const simpleActor: SpawnedActorRef<any, number> = {
      id: 'test',
      send: () => {
        /* ... */
      },
      getSnapshot: () => 42,
      subscribe: () => {
        return {
          unsubscribe: () => {
            /* ... */
          }
        };
      }
    };

    const Test = () => {
      const [state] = useActor(simpleActor);

      return <div data-testid="state">{state}</div>;
    };

    const { getByTestId } = render(<Test />);

    const div = getByTestId('state');

    expect(div.textContent).toEqual('42');
  });

  it('should update snapshot value when actor changes', () => {
    const createSimpleActor = (
      value: number
    ): ActorRef<any, number> & { latestValue: number } => ({
      send: () => {
        /* ... */
      },
      latestValue: value,
      subscribe: () => {
        return {
          unsubscribe: () => {
            /* ... */
          }
        };
      }
    });

    const Test = () => {
      const [actor, setActor] = useState(createSimpleActor(42));
      const [state] = useActor(actor, (a) => a.latestValue);

      return (
        <>
          <div data-testid="state">{state}</div>
          <button
            data-testid="button"
            onClick={() => setActor(createSimpleActor(100))}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(<Test />);

    const div = getByTestId('state');
    const button = getByTestId('button');

    expect(div.textContent).toEqual('42');
    fireEvent.click(button);
    expect(div.textContent).toEqual('100');
  });

  it('send() should be stable', (done) => {
    jest.useFakeTimers();
    const fakeSubscribe = () => {
      return {
        unsubscribe: () => {
          /* ... */
        }
      };
    };
    const noop = () => {
      /* ... */
    };
    const firstActor: ActorRef<any> = {
      send: noop,
      subscribe: fakeSubscribe
    };
    const lastActor: ActorRef<any> = {
      send: () => {
        done();
      },
      subscribe: fakeSubscribe
    };

    const Test = () => {
      const [actor, setActor] = useState(firstActor);
      const [, send] = useActor(actor);

      React.useEffect(() => {
        setTimeout(() => {
          // The `send` here is closed-in
          send({ type: 'anything' });
        }, 10);
      }, []); // Intentionally omit `send` from dependency array

      return (
        <>
          <button
            data-testid="button"
            onClick={() => setActor(lastActor)}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(<Test />);

    // At this point, `send` refers to the first (noop) actor

    const button = getByTestId('button');
    fireEvent.click(button);

    // At this point, `send` refers to the last actor

    jest.advanceTimersByTime(20);

    // The effect will call the closed-in `send`, which originally
    // was the reference to the first actor. Now that `send` is stable,
    // it will always refer to the latest actor.
  });
});
