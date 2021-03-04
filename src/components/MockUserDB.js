import MockTournamentComp from "./MockTournamentComp"
import User from "./User"

function MockUserDB(){

    const user1 = <User
        info = {{
            userName: "rkruzel19",
            password: "nowhere377",
            firstName: "Rob",
            lastName: "Kruzel",
            email: "rkruzel576@gmail.com",
            tournaments: <MockTournamentComp/>
        }}
    />

    const user2 = <User
        info = {{
            userName: "achh2000",
            password: "goBears",
            firstName: "Amy",
            lastName: "Huntoon",
            email: "achh@gmail.com",
            tournaments: <MockTournamentComp/>
        }}
    />

    const user3 = <User
        info = {{
            userName: "suitedpairs",
            password: "whatwhat",
            firstName: "Bruce",
            lastName: "Tarlington",
            email: "letsgo@yahoo.com",
            tournaments: <MockTournamentComp/>
        }}
    />
    
    const users = [user1, user2, user3]

    return users
}

export default MockUserDB