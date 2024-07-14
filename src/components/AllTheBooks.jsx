import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import scifi from '../books/scifi.json'

const AllTheBooks = () => {


  return (
    <Table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {scifi.map((book) => (
          <tr key={book.asin}>
            <td><img src={book.img} alt={book.title} style={{ maxWidth: '100px' }} /></td>
            <td>{book.title}</td>
            <td>{book.category}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AllTheBooks;
