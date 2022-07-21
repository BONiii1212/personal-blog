const Rem = () => {
    const refreshRem = function(){
        let p = window.innerWidth
        let fontSize = (100 * p) / 1080 >= 144 ? 144 : (100 * p) / 1080
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