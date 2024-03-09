import Navigation from '../navigation';

export default function Header() {
  return (
    <>
        <div className='container mx-auto p-5'>
          <div className='text-3xl'>
            <p>Movie Friends</p>
          </div>
          <Navigation/>
        </div>
    </>
  );
}
