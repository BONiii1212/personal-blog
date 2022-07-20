class Rem{
    public isHorizontalScreen = function(){
        // @ts-ignore
        const orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
        const value = window.orientation
        if(orientation){
            return orientation === 'landscape-primary' || orientation === 'landscape-secondary'
        }else if(value){
            return value === 90 || value === -90
        }else{
            return window.innerWidth > window.innerHeight
        }
    }
    public resize = function(){

    }

}
const rem = new Rem()
export default rem