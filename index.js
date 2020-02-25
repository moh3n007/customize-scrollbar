window.addEventListener('load' , () => {
    class scrollbar {
        constructor() {
            this.scrlbrEvn = () => {
                let scrollBtn = document.getElementById('scrollBtn');
                scrollBtn.addEventListener('mousedown' , (event) => {
                    let scrlBtn = event.target;
                    let scrlBtnHeight = scrlBtn.clientHeight;
                    let viewPortHeight = document.body.clientHeight;
                    let bodyHeight = document.documentElement.scrollHeight;
                    let scrlMoveWrap = viewPortHeight - scrlBtnHeight;
                    let pageScrlTop = document.documentElement.scrollTop;
                    let oldMouseY = event.clientY;
                    let preScrlTop = parseInt(scrlBtn.style.top);
                    document.body.onmousemove = (event) => {
                        let newMouseY = event.clientY;
                        console.log((bodyHeight - viewPortHeight) , scrlMoveWrap);
                        scrlBtn.style.top = `${preScrlTop + (((newMouseY - oldMouseY)/viewPortHeight)*100)}%`;
                        if(parseInt(scrlBtn.style.top)*100 < 0.001) {
                            scrlBtn.style.top = 0;
                        } else if(parseInt(scrlBtn.style.top) > (scrlMoveWrap/viewPortHeight)*100 - 0.00001) {
                            scrlBtn.style.top = `${(scrlMoveWrap/viewPortHeight)*100}%`;
                        }
                        
                        if(((bodyHeight-viewPortHeight)/scrlMoveWrap)*(newMouseY - oldMouseY) > bodyHeight-viewPortHeight) {
                            window.scrollTo(0 , Math.round(bodyHeight-viewPortHeight));
                        } else {
                            if((bodyHeight - viewPortHeight) > scrlMoveWrap) {
                                console.log('bozorgtar',pageScrlTop,scrlMoveWrap)
                                window.scrollTo(0 , Math.round(pageScrlTop + ((bodyHeight-viewPortHeight)/scrlMoveWrap)*(newMouseY - oldMouseY)));
                            } else {
                                console.log('kochictar',pageScrlTop,scrlMoveWrap,bodyHeight , viewPortHeight,newMouseY - oldMouseY)
                                window.scrollTo(0 , Math.round(pageScrlTop + ((bodyHeight-viewPortHeight)/scrlMoveWrap)*(newMouseY - oldMouseY)));
                            }
                        }
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
});
window.addEventListener('scroll' , () => {
    let scrollbar = document.getElementById('scrollBar');
    scrollbar.style.top = document.documentElement.scrollTop + 'px'; 
})