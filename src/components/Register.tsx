const Register = () => {
  // const handleRegisterClick = () => {
  //   const registerModal = document.getElementById('register-modal');
  //   const loginModal = document.getElementById('login-modal');
  //   if (registerModal) {
  //     (registerModal as HTMLDialogElement).classList.add('hidden');
  //   }
  //   if (loginModal) {
  //     (loginModal as HTMLDialogElement).showModal();
  //   }
  // };
  return (
    <div>
      <dialog id='register-modal' className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Hello!</h3>
          <p className='py-4'>Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};
export default Register;
