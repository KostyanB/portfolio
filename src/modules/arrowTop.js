const arrowTop = () => {
    document.getElementById('to-top').addEventListener('click',  () => {
        document.body.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
};
export default arrowTop;