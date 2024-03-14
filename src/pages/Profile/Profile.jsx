import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { ProfileActions, ProfileAvatar, ProfileBackground, ProfileContainer, ProfileHeader, ProfileIconAdd, ProfileIconEdit, ProfilePosts, ProfileUser } from "./ProfileStyled";
import { getAllPostsByUser } from "../../services/postsServices";
import { Card } from "../../components/Card/Card";

export function Profile() {
  const { user } = useContext(UserContext);
  const [posts , setPosts] = useState([])

  async function findAllPostsByUser(){
    const postsResponde = await getAllPostsByUser
    setPosts(postsResponde.data.postsByUser)
  }

  useEffect(() => {
    findAllPostsByUser();
  }, [])

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <i className="bi bi-pencil-square"></i>
        </ProfileIconEdit>

        <ProfileBackground src={user.background} alt="" />

        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt= "Foto de usuário"/>
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>
        </ProfileUser>

        <ProfileActions>
          <ProfileIconAdd>
            <i className="bi bi-plus-circle"></i>
          </ProfileIconAdd>
        </ProfileActions>

      </ProfileHeader>

      <ProfilePosts>
        {posts.length === 0 && <h3>Você ainda nao criou nenhuma noticia...</h3>}

        
        {posts.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              comments={item.comments}
              />
          );
        })}
      </ProfilePosts>
    </ProfileContainer>
  )
}