const items = document.querySelectorAll ('#timeline li');

const isInViewport = e1 => {
    const rect = e1.getBoundingClientRect();
    return (
        rect.top>=0 &&
        rect.bottom <= 
        (windows.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (windows.innerWidth || document.documentElement.clientWidth)
    );
};

const run = () => 
items.forEach(items => {
    if(isInViewport(item)) {
        item.classList.add('show');
    }
});

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);