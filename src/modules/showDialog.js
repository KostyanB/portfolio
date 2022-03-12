

const showDialog = () => {
  const myDialog = document.querySelector('#my-dialog');

  setTimeout(() => myDialog.showModal(), 500);

  const handleDialog = e => {
    const closeTarget =
      e.target.classList.contains('dialog__close') || e.target === myDialog;

    if (closeTarget) myDialog.close();
  };

  myDialog.addEventListener('click', handleDialog);
};
export default showDialog;
