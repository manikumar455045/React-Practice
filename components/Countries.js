import { useEffect, useState } from 'react';
const Countries = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState([]);

  const [loading, setLoading] = useState(false);

  const filterProperties = (e) => {
    debugger;
    const selected = e.target.value;
    if (selected === "Showing All") {
      setFilter(list);
    } else {
      const lists = list.filter(i => i.continent === selected);
    setFilter(lists);
    }
  }

  useEffect(async () => {
    setLoading(true);
    const res = await fetch(
      'https://z9blqe7usb.execute-api.eu-west-1.amazonaws.com/dev/countries'
    );

    const data = await res.json();
    console.log(data);
    setList(data);
    setFilter(data);
    setLoading(false);
  }, []);

  const options = [
    {
      name: 'Showing All',
    },
    {
      name: 'Africa'
    },
    {
      name: 'Asia'
    },
  ]
  return (
    <>
    {
      loading ? (
        <h1>loading....</h1>
      ) : (
        (

          filter && filter.map(i => (
            <ul style={{display: 'flex'}}><li>{i.name} - {i.population} - {i.continent}</li></ul>)
            )
        )
      )
    }
    <select  onChange={filterProperties}>
      {
        options.map( i => (
          <option value={i.name}>{i.name}</option>
        ))
      }
    </select>
    </>
  )
};

export default Countries;
