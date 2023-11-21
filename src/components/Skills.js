import {React,useContext} from 'react'
import Progress from './Progress'
import { ThemeContext } from '../contexts/theme'
export default function Skills() {
    let {theme,setTheme} = useContext(ThemeContext)
    return (
        <>
            <div style={{ width: '100%', display: "flex", justifyContent: "center", marginTop: "70px", color:theme==='mo'? 'white':'black'}}>
                <h1>My Skills</h1>
            </div>
            <div style={{ width: '100%', color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ color: theme === 'mo' ? 'white' : 'black', display: "flex", justifyContent: "center", alignItems: "center",flexWrap:"wrap"}}>
                    <div style={{ margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: '2px solid #1976d2', padding: "20px", width: "100px" }}>
                        <h3 style={{ marginBottom: "20px" }}>HTML&CSS</h3>
                        <Progress color={"secondary"} num={99} />
                    </div>
                    <div style={{ margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: '2px solid #1976d2', padding: "20px", width: "100px" }}>
                        <h3 style={{ marginBottom: "20px" }}>Javascript</h3>
                        <Progress color={"success"} num={91} />
                    </div>
                    <div style={{ margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: '2px solid #1976d2', padding: "20px", width: "100px" }}>
                        <h3 style={{ marginBottom: "20px" }}>React JS</h3>
                        <Progress color={"inherit"} num={65} />
                    </div>
                    <div style={{ margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: '2px solid #1976d2', padding: "20px", width: "100px" }}>
                        <h3 style={{ marginBottom: "20px" }}>Python</h3>
                        <Progress color={"primary"} num={98} />
                    </div>
                </div>
            </div>
        </>
    )
}
