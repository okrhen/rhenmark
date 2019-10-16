import React, { useEffect, useState } from 'react';
import { firebaseDB, userDb } from '../../config/firebase-config';

const audio = require('../../assets/audio/sound.mp3');
const notifAudio = new Audio(audio);

interface Props {
  path?: string;
  default?: boolean;
}

const ActiveQueOverview = ({ step }: { step: number }) => {
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    const usersRef = userDb;
    const orderQuery = usersRef.orderByChild('step');
    //
    orderQuery
      .limitToFirst(step === 3 || step === 4 ? 1000 : 1)
      .equalTo(Number(step))
      .on('value', snapshot => {
        const value = snapshot.val();
        const isArray = Array.isArray(value);
        let item = undefined;

        if (value) {
        }

        if (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i)
        ) {
          console.log('Hey, you are here in console logs. Cheers!!');
        } else {
          if (value) {
            notifAudio.play();
          }
        }

        if (isArray) {
          const data = value
            .filter((item: any) => item)
            .sort((a: any, b: any) => a.order - b.order);
          if (data.length > 0) {
            if (step === 3 || step === 4) {
              item = data;
            } else {
              item = data[0];
            }
          }
        } else {
          if (value) {
            const data = Object.keys(value)
              .map((item: any) => value[item])
              .sort((a: any, b: any) => a.order - b.order);
            if (data.length > 0) {
              if (step === 3 || step === 4) {
                item = data;
              } else {
                item = data[0];
              }
            }
          }
        }

        setItems(item);
      });
  }, []);

  if (step === 3 || step === 4) {
    // @ts-ignore
    return items ? (
      <div className="Overview-multiView">
        {step === 3
          ? (items || [])
              .filter((item: any) => item.isServing)
              .sort((a: any, b: any) => a.tableNo - b.tableNo) // @ts-ignore
              .map((value: any, key: number) => (
                <div key={`${key}`} className={`Overview-multiView-content`}>
                  <div className={`Overview-card-number-content`}>
                    <span className="Overview-card-number-count">
                      {(value || { id: '' }).id || ''}
                    </span>
                    {step === 3 && (
                      <span className="Overview-card-number-table">
                        Table #{(value || { tableNo: 0 }).tableNo}
                      </span>
                    )}
                  </div>
                  {/* <span className="Overview-card-number-name">
                    {(value || { name: '' }).name || ''}
                  </span> */}
                </div>
              ))
          : null}
        {step === 4
          ? (items || [])
              .filter((item: any) => item.isServing) // @ts-ignore
              .map((value: any, key: number) => (
                <div
                  key={`${key}`}
                  className={`Overview-multiView-content  ${
                    step === 4 ? 'isLast' : ''
                  }`}
                >
                  <div className={`Overview-card-number-content`}>
                    <span className="Overview-card-number-count">
                      {(value || { id: '' }).id || ''}
                    </span>
                  </div>
                  <span className="Overview-card-number-name">
                    {(value || { name: '' }).name || ''}
                  </span>
                </div>
              ))
          : null}
      </div>
    ) : null;
  }

  return items ? (
    <div>
      <div className="Overview-card-number-content">
        <span className="Overview-card-number-count">
          {(items || { id: '' }).id || ''}
        </span>
      </div>
      <span className="Overview-card-number-name">
        {(items || { name: '' }).name || ''}
      </span>
    </div>
  ) : null;
};

const NextQue = ({ step }: { step: number }) => {
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    const usersRef = userDb;
    usersRef
      .orderByChild('step')
      //   .limitToFirst(100)
      .equalTo(Number(step))
      .on('value', snapshot => {
        const value = snapshot.val();
        const isArray = Array.isArray(value);
        // @ts-ignore
        let item = undefined;

        if (isArray) {
          const data = value
            .filter((item: any) => item)
            .sort((a: any, b: any) => a.order - b.order);

          if (data.length > 1 && step !== 3) {
            data.shift();
            item = data || [];
          } else {
            item = data || [];
          }
        } else {
          if (value) {
            const data = Object.keys(value)
              .map((item: any) => value[item])
              .sort((a: any, b: any) => a.order - b.order);
            if (data.length > 1 && step !== 3) {
              data.shift();
              item = data || [];
            } else {
              item = data || [];
            }
          }
        }

        setItems(item);
      });
  }, []);

  // @ts-ignore

  return items ? (
    <div className="Overview-card-next">
      <span className="Overview-card-next-line">NEXT IN LINE:</span>
      {(items || [])
        .filter((item: any) =>
          step === 3 || step === 4 ? !item.isServing : item
        )
        .map((value: any, key: number) => {
          return (
            <div className="Overview-card-next-number" key={`${key}`}>
              <span className="Overview-card-next-number-que">
                {(value || { id: '' }).id || ''}
              </span>
              {/* <span>{(value || { name: '' }).name || ''}</span> */}
            </div>
          );
        })}
    </div>
  ) : (
    <div />
  );
};

const Overview: React.SFC<Props> = () => {
  return (
    <div className="Overview">
      <div className="Overview-card">
        <div className="Overview-card-title">
          STEP 2<br />
          <span>NOW SERVING</span>
        </div>
        <div className="Overview-card-number">
          {
            // @ts-ignore
            <ActiveQueOverview step={2} />
          }
          {
            // @ts-ignore
            <NextQue step={2} />
          }
        </div>
      </div>
      <div className="Overview-card">
        <div className="Overview-card-title">
          STEP 3
          <br />
          <span>NOW SERVING</span>
        </div>
        <div className="Overview-card-number">
          {
            // @ts-ignore
            <ActiveQueOverview step={3} />
          }
          {<NextQue step={3} />}
        </div>
      </div>
      <div className="Overview-card">
        <div className="Overview-card-title">
          STEP 4 <br />
          <span>NOW SERVING</span>
        </div>
        <div className="Overview-card-number">
          {
            // @ts-ignore
            <ActiveQueOverview step={4} />
          }
          {
            // @ts-ignore
            <NextQue step={4} />
          }
        </div>
      </div>
      {/* <div className="Overview-card">
        <div className="Overview-card-title">STEP 5</div>
        <div className="Overview-card-number">
          <ActiveQueOverview step={5} />
          <NextQue step={5} />
        </div>
      </div> */}
    </div>
  );
};

export default Overview;
