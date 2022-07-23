const Rem = () => {
    const refreshRem = function(){
        let p = window.innerWidth
        let fontSize
        if(p < 768){
            fontSize = 14 / 768 * p
        }else{
            fontSize = 18
        }
        document.documentElement.style.fontSize = fontSize + 'px'
    }
    // 首次加载的时候刷新一遍fontSize
    refreshRem()
    let timeout : any
    window.addEventListener(
        'resize',
        function () {
            clearTimeout(timeout)
            timeout = setTimeout(refreshRem, 300)
        }
    )
    window.addEventListener(
        'pageshow',
        function(p) {
            if(p.persisted) {
                clearTimeout(timeout)
                timeout = setTimeout(refreshRem, 300)
            }
        }
    )
}
export default Rem