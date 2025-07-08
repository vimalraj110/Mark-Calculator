import React, {useState} from'react';
function MarkForm() {
  const [name, setName] = useState('');
  const [mark1, setMark1] = useState('');
  const [mark2, setMark2] = useState('');
  const [mark3, setMark3] = useState('');
  const [total, setTotal] = useState(null);
  const [average,setAverage] = useState(null);

  const Calculate = () => {
    const sum =
      parseFloat(mark1 || 0) +
      parseFloat(mark2 || 0) +
      parseFloat(mark3 || 0);
    setTotal(sum);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Mark 1"
        onChange={(e) => setMark1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Mark 2"
        onChange={(e) => setMark2(e.target.value)}
      />
      <input
        type="number"
        placeholder="Mark 3"
        onChange={(e) => setMark3(e.target.value)}
      />
      <br />
      <button onClick={Calculate}>
      {total !== null ? `Total: ${total}` : 'Calculate Total'}
     </button>
     <button onClick={() => {
  const avg = (
    (parseFloat(mark1 || 0) +
     parseFloat(mark2 || 0) +
     parseFloat(mark3 || 0)) / 3
  )
  setAverage(avg);
}}>
  {average !== null ? `Average: ${average}` : 'Calculate Average'}
</button>


    </div>
  );
}

export default MarkForm;