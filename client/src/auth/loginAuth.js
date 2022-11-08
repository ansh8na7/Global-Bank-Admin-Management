const isLoggedIn = () => {
    if (!localStorage.getItem("adminToken")){
        return false;
    }else{
        return true;
    }
}

export default isLoggedIn;