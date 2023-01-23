import Header from '../reusables/Header'


function Home() {
    return (
        <header style={HeaderStyle}>
        <div> 
            <Header/>
        </div>
        </header>

    );
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    // background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "black"


}
export default Home;