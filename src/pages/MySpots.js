import SpotCard from "../components/SpotCard/SpotCard";

// import SpotCard from '../components/SpotCard/SpotCard'
// dont need to import again I guess *shrugs*

export default function MySpots(props) {
    return (
        <main className="Page">
            <h1>Welcome to your spots!</h1>
            <SpotCard />
            <SpotCard />
            <SpotCard />

        </main>
    )
}