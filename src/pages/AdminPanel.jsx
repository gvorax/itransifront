import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';

const AdminPanel = () => {
  const [data, setData] = useState([
    {
      select: false,
      id: 1,
      name: 'Snow',
      email: 'snow@mars.uz',
      lastLogTime: '12.11.2022 14:30',
      regTime: '10.04.2021 11:40',
      status: true,
    },
    {
      select: false,
      id: 2,
      name: 'maya',
      email: 'maya@mars.uz',
      lastLogTime: '12.11.2022 14:30',
      regTime: '10.04.2021 11:40',
      status: true,
    },
    {
      select: true,
      id: 3,
      name: 'lenovo',
      email: 'lenovo@mars.uz',
      lastLogTime: '12.11.2022 14:30',
      regTime: '10.04.2021 11:40',
      status: true,
    },
  ]);

  const check = () => {
    if (checked()) {
      return false;
    } else if (unChecked()) {
      return true;
    } else {
      return false;
    }
  };
  const checked = () => {
    return data.every((item) => item.select === false);
  };
  const unChecked = () => {
    return data.every((item) => item.select === true);
  };

  const allUnchecked = () => {
    return data.map((item) => ({ ...item, select: false }));
  };

  const allChecked = () => {
    return data.map((item) => ({ ...item, select: true }));
  };

  const select = (id) => {
    const existingItem = data.find((item) => item.id === id);

    if (existingItem) {
      return data.map((item) =>
        item.id === id ? { ...item, select: !item.select } : item
      );
    }

    return [...data];
  };

  const onBlock = () => {
    return data.map((item) =>
      item.select == true ? { ...item, status: false, select: false } : item
    );
  };
  const onUnblock = () => {
    return data.map((item) =>
      item.select == true ? { ...item, status: true, select: false } : item
    );
  };

  const removeUser = () => {
    return data.filter((item) => item.select !== true);
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex w-100 h-100 justify-content-center align-items-center">
        <div className="container">
          <div
            className="d-flex justify-content-between"
            style={{ marginTop: '90px' }}
          >
            <h2>Student list</h2>
            <div>
              <button
                className="btn btn-danger"
                style={{ marginRight: '10px' }}
                onClick={() => setData(onBlock)}
                disabled={checked()}
              >
                Block
              </button>
              <button
                className="btn btn-info"
                style={{ marginRight: '10px' }}
                onClick={() => setData(onUnblock)}
                disabled={checked()}
              >
                Unblock
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setData(removeUser)}
                disabled={checked()}
              >
                Delete
              </button>
            </div>
          </div>
          <table className="table table-dark w-800 h-600">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    onChange={() =>
                      data.every((item) => item.select == true)
                        ? setData(allUnchecked)
                        : setData(allChecked)
                    }
                    checked={check()}
                  />
                </th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Last LogTime</th>
                <th scope="col">RegTime</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td scope="row">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      onChange={() => setData(select(item.id))}
                      checked={item.select}
                    />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.lastLogTime}</td>
                  <td>{item.regTime}</td>
                  <td>{item.status ? <>Active</> : <>Block</>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
