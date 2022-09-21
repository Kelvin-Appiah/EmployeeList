import styles from '../styles/Home.module.css';

import { useState } from 'react';

import Employees from '../data';

import Image from 'next/image';

export default function Home() {
  const [data, setData] = useState(Employees);

  const remEmployee = (id) => {
    setData(data.filter((employee) => employee.id !== id));
  };

  const remAllEmployees = () => {
    setData([]);
  };

  return (
    <section className={styles.card}>
      <h1 style={{ alignSelf: 'center' }}>Employee List</h1>

      {data.map((employee) => {
        const { name, id, image, salary } = employee;

        return (
          <li
            key={id}
            style={{
              border: '1px solid rgb(180, 174, 174)',
              display: 'flex',
              alignItems: 'center',
              margin: '1rem',
            }}
          >
            <div style={{ margin: '0.5rem' }}>
              <Image
                style={{ borderRadius: '50px' }}
                src={'/' + image}
                width={100}
                height={100}
                alt={name}
              />
            </div>
            <div style={{ flex: '4rem' }}>
              <h1>{name}</h1>
              <p>{salary}</p>
            </div>
            <button
              style={{
                border: 'none',
                color: '#fff',
                backgroundColor: 'red',
                fontWeight: 'bold',
                padding: '0.7rem',
                marginRight: '2rem',
              }}
              onClick={() => remEmployee(id)}
            >
              remove
            </button>
          </li>
        );
      })}

      <button className={styles.btn} onClick={remAllEmployees}>
        Remove All
      </button>
    </section>
  );
}
