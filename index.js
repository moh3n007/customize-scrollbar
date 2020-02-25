window.addEventListener('load' , () => {
    class scrollbar {
        constructor() {
            this.scrlbrEvn = () => {
                let scrollBtn = document.getElementById('scrollBtn');
                scrollBtn.addEventListener('mousedown' , (event) => {
                    let scrlBtn = event.target;
                    let scrlBtnHeight = scrlBtn.clientHeight;
                    let oldMouseY = event.clientY;
                    let preScrlTop = parseInt(scrlBtn.style.top);
                    // console.log(scrlBtnHeight);
                    document.body.onmousemove = (event) => {
                        let newMouseY = event.clientY;
                        scrollBtn.style.top = `${preScrlTop + newMouseY - oldMouseY}px`;
                        if(parseInt(scrollBtn.style.top) < 0) {
                            scrollBtn.style.top = 0;
                        } else if(parseInt(scrollBtn.style.top) > (document.body.clientHeight - scrlBtnHeight)) {
                            scrollBtn.style.top = `${document.body.clientHeight - scrlBtnHeight}px`;
                        }
                        // console.log(oldMouseY , newMouseY);
                    }

                });  
                scrollBtn.addEventListener('mouseup' , () => {
                    document.body.onmousemove = null;
                });
            };
            this.scrlbrEvn();
        }


    }
    new scrollbar();
});
window.addEventListener('mouseup' , () => {
    document.body.onmousemove = null;
})