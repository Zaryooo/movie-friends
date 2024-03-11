import Navigation from '../navigation';

export default function Header() {
  return (
    <>
      <div className='container mx-auto p-5'>
        <div className='flex justify-between content-center flex-wrap'>
          <div className='text-3xl mr-14'>
            <p>Movie Friends</p>
          </div>
          <Navigation />
          <div className='flex leading-9'>
            <h1>Login</h1>
          </div>
        </div>
      </div>
    </>
  );
}
