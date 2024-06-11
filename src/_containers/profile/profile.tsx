import ProfileNavigationComponent from "@container/profile/profile.navigation.tsx";
import ProfileTitleComponent from "@container/profile/profile.title.tsx";
import {useLocation} from "react-router-dom";
import ProfileInfoComponent from "@container/profile/profile.info.tsx";
import ProfileEditComponent from "@container/profile/profile.edit.tsx";

const ProfileContainer = () => {
    const location = useLocation();
    return (
        <div id="main-wrapper" className="front">
            <ProfileTitleComponent path={'My Page'} />
            <div className="profile-page">
                <div className="container">
                    <ProfileNavigationComponent />
                    {
                        location.pathname.includes('edit')
                            ? <ProfileEditComponent />
                            : <ProfileInfoComponent />
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileContainer;