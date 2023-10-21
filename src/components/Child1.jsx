import {useOutletContext} from 'react-router-dom';

const Child1 = () => {
  const {anton} = useOutletContext();
  return (
    <main>
      <h1>This is the <span>First</span> child component. {anton}</h1>
      
    </main>
  );
};

export default Child1;