
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
    text-align: center;
    text-transform: uppercase;
`;

const ProfileSubHeader = styled.h3`
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
`;

const ProfileText = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    color: #666;
    line-height: 1.5;
`;

const Img=styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    margin-bottom: 10px;
`;

const Internship = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    color: #666;
    line-height: 1.5;
`;
const Profile = () => {
    const profileData = {
        name: 'Raghav Mundhara',
        bio: 'Student | Flutter Developer | Quick Learner ',
        edu: 'B.E Information Technology',
        clg: 'Vivekanand Education Society Institute of Technology',
        cgpa: '8.95',
        imgUrl: 'https://avatars.githubusercontent.com/u/56132780?v=4',
        intern: 'Intern at CodeClause (App Developer)',
    };

    return (
        <ProfileContainer>
            <ProfileHeader>Profile</ProfileHeader>
            <Img src={profileData.imgUrl} alt="profile" />
            <ProfileSubHeader>{profileData.name}</ProfileSubHeader>
            <ProfileText>{profileData.bio}</ProfileText>
            <ProfileSubHeader>Education</ProfileSubHeader>
            <ProfileText>{profileData.edu}</ProfileText>
            <ProfileText>CGPA: {profileData.cgpa}</ProfileText>
            <ProfileText>{profileData.clg}</ProfileText>
            <ProfileSubHeader>Internship</ProfileSubHeader>
            <Internship>{profileData.intern}</Internship>
        </ProfileContainer>
    );
};


export default Profile;

