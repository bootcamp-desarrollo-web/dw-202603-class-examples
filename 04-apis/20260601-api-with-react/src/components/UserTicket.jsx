function UserTicket({userData}) {
    return (
        <div className="user-ticket">
            {userData.name} / {userData.email}

        </div>
    )

}

export default UserTicket