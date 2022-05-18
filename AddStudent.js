import React from 'react'

function AddStudent() {
  const AddStudent = () => {
    let firstName = document.form.first.value;
    let lastName = document.form.last.value;
    let dob = document.form.age.value;
    let s_class = document.form.sclass.value;
  
    let tr = document.createElement('tr');
  
    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));
  
    td1.innerHTML = firstName;
    td2.innerHTML = lastName;
    td3.innerHTML = dob;
    td4.innerHTML = s_class;
  }
    return (
      <>
        <div></div>
      </>
    )
  }

export default AddStudent