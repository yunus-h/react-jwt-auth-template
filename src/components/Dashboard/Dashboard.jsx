import { useContext, useEffect } from "react"

import { UserContext } from "../../contexts/UserContext"

import * as userService from '../../services/userService';

const Dashboard = () => {
  const { user } = useContext(UserContext)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        console.log(fetchedUsers);
      } catch (err) {
        console.log(err)
      }
    }
    if (user) fetchUsers();
  }, [user]);
  

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        Hey how are you? This dashboard page is for you to see all users
      </p>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus excepturi eaque, libero impedit aperiam ab neque quia sit ad porro obcaecati officia iure inventore sed eveniet fugit, in, earum ipsam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, vitae dolor quis quidem qui eum consequatur? Dolorem rem illo exercitationem, esse fugiat odio hic earum. Quae exercitationem nesciunt fugiat necessitatibus?
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facere amet animi expedita exercitationem sed cupiditate, optio fuga accusantium magni perferendis porro. Inventore culpa, excepturi dolores provident dolore accusantium. Tempora?</p>
    </main>
  )
}

export default Dashboard