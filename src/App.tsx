import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {client} from "./apollo.tsx";
import AuthSmsContainer from "@container/auth/auth.sms.tsx";
import SignupContainer from "@container/auth/auth.signup.tsx";
import AuthSMSVerifyContainer from "@container/auth/auth.sms.verify.tsx";
import SignInContainer from "@container/auth/auth.login.tsx";
import AUthJoinContainer from "@container/auth/auth.join.tsx";
import ProfileContainer from "@container/profile/profile.tsx";
import AuthIDFindContainer from "@container/auth/auth.id.find.tsx";
import AuthPWFindContainer from "@container/auth/auth.pw.find.tsx";
import AuthPWVerifyContainer from "@container/auth/auth.pw.verify.tsx";
import AuthPWNewContainer from "@container/auth/auth.pw.new.tsx";
import AuthPWCompleteContainer from "@container/auth/auth.pw.complete.tsx";
import AuthForgotContainer from "@container/auth/auth.forgot.tsx";
import MintingContainer from "@container/minting/minting.tsx";
import LandingContainer from "@container/landing/landing.tsx";
import Header from "@container/_common/header/header.tsx";
import Footer from "@container/_common/footer/footer.tsx";
import ProfileRewardsContainer from "@container/profile/rewards/profile.rewards";
import ProfileHistoryContainer from "@container/profile/history/profile.history.tsx";
import ProfileSettingContainer from "@container/profile/profile.setting.tsx";
import ProfileNFTContainer from "@container/profile/nfw/profile.nfw.tsx";
import LoadingModal from "@container/modal/loading.modal.tsx";
import {PrivateRoute} from "@helper/privateRoute.tsx";
import AuthIDConfirmContainer from "@container/auth/auth.id.confirm.tsx";
import AuthVerify from "@container/auth/auth.verify.tsx";
import EnPrivacyPolicyContainer from "@container/terms/en/privacy-policy.tsx";
import EnTermsOfServiceContainer from "@container/terms/en/terms-of-service.tsx";
import KoPrivacyPolicyContainer from "@container/terms/ko/privacy-policy.tsx";
import KoTermsOfServiceContainer from "@container/terms/ko/terms-of-service.tsx";
import KoTermsOfNFWContainer from "@container/terms/ko/terms-of-nfw.tsx";
import EnTermsOfNewContainer from "@container/terms/en/terms-of-nfw.tsx";
import LandingContainer2 from "@container/landing2/landing.tsx";
import HeaderRoute from "@helper/header.route.tsx";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import DetailContainer from "@container/detail/detail.tsx";
import ProfileWalletContainer from "@container/profile/wallet/wallet.tsx";
import MarketContainer from "@container/market/market.tsx";
import KYCContainer from "@container/profile/kyc/kyc.tsx";
import ExploreContainer from "@container/explore/explore.tsx";
import CompleteContainer from "@container/sns/complete/complete.tsx";
import TermsOfRefund from "@container/terms/ko/terms-of-refund.tsx";
import VerifyContainer from "@container/sns/verify/verify.tsx";
import SilverEventContainer from "@container/silver/silver.tsx";
import EnTermsOfRefund from "@container/terms/en/terms-of-refund.tsx";
import Contactus from "@container/contactus/contactus.tsx";

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <HeaderRoute>
                    <Header/>
                </HeaderRoute>
                <Routes>
                    <Route path={'/auth/sms'} element={<PrivateRoute><AuthSmsContainer/></PrivateRoute>}/>
                    <Route path={'/auth/sms/verify'} element={<PrivateRoute><AuthSMSVerifyContainer/></PrivateRoute>}/>
                    <Route path={'/auth/forgot'} element={<PrivateRoute><AuthForgotContainer/></PrivateRoute>}/>
                    <Route path={'/auth/find/verify'} element={<PrivateRoute><AuthVerify /></PrivateRoute>}/>
                    <Route path={'/auth/find-id'} element={<PrivateRoute><AuthIDFindContainer/></PrivateRoute>}/>
                    <Route path={'/auth/find-id/complete'} element={<PrivateRoute><AuthIDConfirmContainer /></PrivateRoute>}/>
                    <Route path={'/auth/find-pw'} element={<PrivateRoute><AuthPWFindContainer/></PrivateRoute>}/>
                    <Route path={'/auth/find-pw/verify'} element={<PrivateRoute><AuthPWVerifyContainer/></PrivateRoute>}/>
                    <Route path={'/auth/find-pw/new/:authToken'} element={<PrivateRoute><AuthPWNewContainer/></PrivateRoute>}/>
                    <Route path={'/auth/find-pw/complete'} element={<PrivateRoute><AuthPWCompleteContainer/></PrivateRoute>}/>
                    <Route path={'/auth/complete'} element={<PrivateRoute><AUthJoinContainer/></PrivateRoute>}/>
                    <Route path={"/auth/signup"} element={<PrivateRoute><SignupContainer/></PrivateRoute>}/>
                    <Route path={'/auth/login'} element={<PrivateRoute><SignInContainer/></PrivateRoute>} />

                    <Route path={'/profile'} element={<PrivateRoute><ProfileContainer/></PrivateRoute>}/>
                    <Route path={'/profile/edit'} element={<PrivateRoute><ProfileContainer/></PrivateRoute>}/>
                    <Route path={'/profile/nfw'} element={<PrivateRoute><ProfileNFTContainer/></PrivateRoute>}/>
                    <Route path={'/profile/rewards'} element={<PrivateRoute><ProfileRewardsContainer/></PrivateRoute>}/>
                    <Route path={'/profile/history'} element={<PrivateRoute><ProfileHistoryContainer/></PrivateRoute>}/>
                    <Route path={'/profile/setting'} element={<PrivateRoute><ProfileSettingContainer/></PrivateRoute>}/>
                    <Route path={'/profile/wallet'} element={<PrivateRoute><ProfileWalletContainer/></PrivateRoute>}/>
                    <Route path={'/profile/kyc'} element={<PrivateRoute><KYCContainer/></PrivateRoute>}/>

                    <Route path={'/terms/en/privacy-policy'} element={<EnPrivacyPolicyContainer/>}/>
                    <Route path={'/terms/en/terms-of-service'} element={<EnTermsOfServiceContainer/>}/>
                    <Route path={'/terms/en/terms-of-nfw'} element={<EnTermsOfNewContainer/>}/>
                    <Route path={'/terms/en/terms-of-refund'} element={<EnTermsOfRefund/>}/>
                    <Route path={'/terms/ko/privacy-policy'} element={<KoPrivacyPolicyContainer/>}/>
                    <Route path={'/terms/ko/terms-of-service'} element={<KoTermsOfServiceContainer/>}/>
                    <Route path={'/terms/ko/terms-of-nfw'} element={<KoTermsOfNFWContainer/>}/>
                    <Route path={'/terms/ko/terms-of-refund'} element={<TermsOfRefund/>}/>
                    <Route path={'/minting'} element={<PrivateRoute><MintingContainer/></PrivateRoute>}/>

                    <Route path={'/sns/verify'} element={<PrivateRoute><VerifyContainer/></PrivateRoute>}/>
                    <Route path={'/sns/complete'} element={<PrivateRoute><CompleteContainer/></PrivateRoute>}/>
                    <Route path={'/event/reward'} element={<PrivateRoute><SilverEventContainer/></PrivateRoute>} />

                    <Route path={'/contactus'} element={<PrivateRoute><Contactus/></PrivateRoute>}/>

                    <Route path={"/market/detail/:id"} element={<PrivateRoute><DetailContainer/></PrivateRoute>}/>
                    <Route path={"/market/explore"} element={<PrivateRoute><ExploreContainer/></PrivateRoute>}/>
                    <Route path={"/market"} element={<PrivateRoute><MarketContainer/></PrivateRoute>}/>

                    <Route path={"/2"} element={<PrivateRoute><LandingContainer/></PrivateRoute>}/>
                    <Route path={"/"} element={<PrivateRoute><LandingContainer2/></PrivateRoute>}/>

                </Routes>
                <Footer/>
                <LoadingModal />
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App;
