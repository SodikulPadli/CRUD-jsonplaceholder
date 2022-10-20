import React, { useState, useEffect } from 'react';
import './table.css';

function Data() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  //   Soal No 3
  const getData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => {
        console.log(err);
      });
  };
  //   Soal No 3
  console.log(post);
  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPost(
            post.filter((item) => {
              return item.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {post
            .filter((item) => item.id <= 10)
            .map((item) => (
              <tr key={item.id} id={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete();
                    }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Data;
