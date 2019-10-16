import React, { useState, useEffect, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { userDb } from '../../config/firebase-config';

interface Props {
  path?: string;
  default?: boolean;
  number?: number;
}

const initialState = {
  firstName: '',
  lastName: '',
  middleName: '',
};

const StepOne = ({ step }: { step?: number }) => {
  const [state, setState] = useState(initialState);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const userData = `${state.lastName}, ${state.firstName} ${state.middleName}`;
    const getData = userDb.once('value').then((snapshot: any) => {
      const numberOfChildren = snapshot.numChildren();
      const nextNumber = Number(numberOfChildren + 1);
      const users = userDb.child(`${nextNumber}`);
      users
        .set({
          id: nextNumber,
          name: userData,
          order: nextNumber,
          step: 2,
        })
        .then(() => {
          // notifAudio.play()
          toast.success(
            // tslint:disable-next-line: jsx-wrap-multiline
            <div className="Pages-toast">
              You're queuing number is <br />
              <span>{nextNumber}</span>
            </div>,
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
          setState(initialState);
        });
    });
  };

  const handleChange = (key: string, value?: string) => {
    setState({ ...state, [key]: (value || '').toUpperCase() });
  };

  return step === 1 ? (
    <div className="Pages-one">
      <form className="Pages-one" onSubmit={handleSubmit}>
        <span className="Pages-one-title">STEP 1</span>
        <input
          placeholder="Last Name"
          value={state.lastName}
          onChange={e => handleChange('lastName', e.target.value)}
          required
        />
        <input
          placeholder="First Name"
          value={state.firstName}
          onChange={e => handleChange('firstName', e.target.value)}
          required
        />
        <input
          placeholder="Middle Name"
          value={state.middleName}
          onChange={e => handleChange('middleName', e.target.value)}
          required
        />
        <button>ADD TO QUE</button>
      </form>
    </div>
  ) : null;
};

const getOtherItems = (item: []) => {
  return item.shift();
};

const StepOthers = ({
  show,
  step,
  isLastStep,
}: {
  show: boolean;
  step: number;
  isLastStep: boolean;
}) => {
  const [items, setItems] = useState(undefined);
  const [firstItem, setFirstItem] = useState(undefined);

  useEffect(() => {
    if (show) {
      const usersRef = userDb;

      usersRef
        .orderByChild('step')
        .limitToFirst(100)
        .equalTo(Number(step))
        .on('value', snapshot => {
          const value = snapshot.val();
          const isArray = Array.isArray(value);
          let item = undefined;
          if (isArray) {
            const data = value
              .filter((item: any) => item)
              .sort((a: any, b: any) => a.order - b.order);
            if (data.length > 0) {
              item = data;
            }
          } else {
            if (value) {
              const data = Object.keys(value)
                .map((item: any) => value[item])
                .sort((a: any, b: any) => a.order - b.order);
              if (data.length > 0) {
                item = data;
              }
            }
          }

          setItems(item);
        });
    }

    // @ts-ignore
    if (items && (items || []).length > 0) {
      // @ts-ignore
      setFirstItem(items[0]);
    }
  }, []);

  const handleMoveToNext = (id: number, order: number) => {
    if (items) {
      userDb
        .orderByChild('step')
        .equalTo(Number(step + 1))
        .once('value', snap => {
          const snapVal = snap.val();
          let lastOrder = order;
          if (snapVal) {
            const data = Object.keys(snapVal)
              .map(item => snapVal[item])
              .sort((a, b) => b.order - a.order);
            if (data && data.length > 0) {
              const { order } = data[0];
              // @ts-ignore
              lastOrder = Number(order + 1);
            }
          }

          userDb
            .child(`${id}`)
            .update({
              order: lastOrder,
              step: step + 1,
            })
            .then(() => {
              toast.success(
                // tslint:disable-next-line: jsx-wrap-multiline
                <div className="Pages-toast">
                  <span>
                    {isLastStep
                      ? 'Thank you, you finish the process!'
                      : 'Successfully moved to the next step!'}
                  </span>
                </div>,
                {
                  position: toast.POSITION.TOP_CENTER,
                }
              );
            });

          console.log('lastOrder ==>', lastOrder);
        });
    }
  };

  let active = undefined;

  // @ts-ignore
  //   if (items && items.length > 0) {
  //     // @ts-ignore
  //     active = items[0];
  //   }
  const waiting = getOtherItems(items || []);

  return show ? (
    <div className="Pages-content">
      <div className="Pages-content-left">
        <span className="Pages-content-left-title">NOW SERVING</span>
        {waiting ? (
          <div className="Pages-content-left-center">
            <div className="Pages-content-card">
              <span className="Pages-other-content-title">
                {(waiting || { id: '' }).id || ''}
              </span>
              <br />
              <span className="Pages-other-content-name">
                {(waiting || { name: '' }).name || ''}
              </span>
              <br />
            </div>
            {
              // @ts-ignore
              <button
                // @ts-ignore
                onClick={() => handleMoveToNext(waiting.id, waiting.order)}
              >
                {isLastStep ? 'Mark as Finish' : 'Move to next step'}
              </button>
            }
          </div>
        ) : (
          <div>No active que</div>
        )}
      </div>
      <div className="Pages-content-right">
        <span className="Pages-content-right-waiting">Waiting</span>
        {items && (items || []).length > 0 ? (
          (items || []).map((value: any, key: number) => (
            <div className="Pages-content-right-card" key={key}>
              <div>
                <span className="Pages-content-right-card-id">{value.id}</span>
                <span>{value.name}</span>
              </div>
              {
                // @ts-ignore
                <button
                  className="Pages-content-right-card-btn"
                  // @ts-ignore
                  onClick={() => handleMoveToNext(value.id, value.order)}
                >
                  {isLastStep ? 'Mark as finish' : ' Move to next step'}
                </button>
              }
            </div>
          ))
        ) : (
          <div>No active que</div>
        )}
      </div>
    </div>
  ) : null;
};

const StepThree = () => {
  const [myTable, setTable] = useState(undefined);
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    userDb
      .orderByChild('step')
      .equalTo(3)
      .limitToFirst(100)
      .on('value', (snap: any) => {
        const snapVal = snap.val();

        if (snapVal && snapVal !== null) {
          const data = Object.keys(snapVal)
            .map(item => snapVal[item])
            // .filter(item => !item.isServing)
            .sort((a: any, b: any) => a.order - b.order);
          // @ts-ignore

          // @ts-ignore
          setItems(data);
        }
      });
  }, []);

  const handleChange = (e: any) => {
    setTable({
      // @ts-ignore
      number: Number(e.target.value),
    });
  };

  const handleClick = () => {
    setTable({
      ...(myTable || {}),
      // @ts-ignore
      status: true,
    });
  };

  const handleSelect = (id: number, order: number) => {
    userDb.child(`${id}`).update({
      // @ts-ignore
      tableNo: myTable.number,
      isServing: true,
    });
  };

  const handleMoveToNext = ({ id, order }: any) => {
    let step = 3;
    userDb
      .orderByChild('step')
      .equalTo(Number(step + 1))
      .once('value', snap => {
        const snapVal = snap.val();
        let lastOrder = order;
        if (snapVal) {
          const data = Object.keys(snapVal)
            .map(item => snapVal[item])
            .sort((a, b) => b.order - a.order);
          if (data && data.length > 0) {
            const { order } = data[0];
            // @ts-ignore
            lastOrder = Number(order + 1);
          }
        }

        userDb
          .child(`${id}`)
          .update({
            order: lastOrder,
            step: step + 1,
          })
          .then(() => {
            console.log('items ==>', items);
            if (!items || (items || []).length <= 1) {
              setTable(undefined);
            }

            toast.success(
              // tslint:disable-next-line: jsx-wrap-multiline
              <div className="Pages-toast">
                <span>Successfully moved to the next step!</span>
              </div>,
              {
                position: toast.POSITION.TOP_CENTER,
              }
            );
          });
      });
  };

  // @ts-ignore
  let onQue = undefined;

  if (myTable && items) {
    // @ts-ignore
    const hasActive = items.find(
      // @ts-ignore
      item => item.tableNo === myTable.number
    );

    if (hasActive) {
      onQue = hasActive;
    }
  }
  return (
    <div className="Pages-three">
      {// @ts-ignore
      myTable && (myTable || { status: false }).status ? (
        <div className="Pages-three-content">
          {!onQue && (
            <span className="Pages-three-content-label">PLEASE SELECT</span>
          )}
          {items && (items || []).length > 0 && !onQue ? (
            (items || [])
              // @ts-ignore
              .filter(item => !item.isServing)
              .map((item: any, key: number) => (
                // tslint:disable-next-line: jsx-key
                <Fragment>
                  <br />
                  <div key={key} className="Pages-three-card">
                    <span className="Pages-three-card-number">{item.id}</span>{' '}
                    <br />
                    <span>{item.name}</span>
                    {
                      // @ts-ignore
                      <button onClick={() => handleSelect(item.id, item.order)}>
                        SELECT
                      </button>
                    }
                  </div>
                </Fragment>
              ))
          ) : onQue ? (
            <div className="Pages-three-active">
              <span>Serving Number</span>
              {
                <span className="Pages-three-active-number">
                  {(onQue || { id: 0 }).id}
                </span>
              }
              {
                // @ts-ignore
                <button onClick={() => handleMoveToNext(onQue || {})}>
                  Move to next
                </button>
              }
            </div>
          ) : (
            <div className="Pages-three-active">
              <span>NO ITEMS YET</span>
            </div>
          )}
        </div>
      ) : (
        <div>
          <input
            type="number"
            placeholder="TABLE NO"
            onChange={handleChange}
            required
          />
          {
            <button
              // @ts-ignore
              disabled={!Boolean(myTable && myTable.number)}
              onClick={handleClick}
            >
              SET MY TABLE
            </button>
          }
        </div>
      )}
      <span>
        <div></div>
      </span>
    </div>
  );
};

const Pages: React.SFC<Props> = props => {
  const { number } = props;

  const activeStep = Number(number);
  const isLastStep = activeStep === 4;

  return (
    <div className="Pages">
      <ToastContainer autoClose={3000} pauseOnFocusLoss={false} />
      <StepOne step={activeStep} />
      <StepOthers
        show={activeStep === 2 || activeStep === 4}
        step={activeStep}
        isLastStep={isLastStep}
      />
      {activeStep === 3 && <StepThree />}
    </div>
  );
};

export default Pages;
