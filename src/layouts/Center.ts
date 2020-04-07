import Div from "../core/Div"

const style = {
    height:'100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center', // Center Horizontal
    alignItems: 'center', // Center Vertical   
}

export default ({ child }: { child: any }) => {
    return Div({ children: [child], style })
}