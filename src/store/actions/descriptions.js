import * as actionTypes from './actionTypes';

export const decriptionLighting = () => {
    return {
        type: actionTypes.DESCRIPTION_LIGHTING
    };
};
export const decriptionInstalation=()=>{
    return{
        type:actionTypes.DESCRIPTION_INSTALLATION
    }
}
export const decriptionAutomation=()=>{
    return{
        type:actionTypes.DESCRIPTION_AUTOMATION
    }
}
export const decriptionEnterteinmant=()=>{
    return{
        type:actionTypes.DESCRIPTION_ENTERTEINMANT
    }
}
export const decriptionVideo=()=>{
    return{
        type:actionTypes.DECRITPTION_VIDEO
    }
}

export const decriptionAlarm=()=>{
    return{
        type:actionTypes.DECRIPTION_ALARM
    }
}
export const decriptionNetworks=()=>{
    return{
        type:actionTypes.DECRITPION_NETWORKS
    }
}

export const fadeEfect=()=>{
    return{
        type:actionTypes.FADE_EFECT
    }
}

export const fadeDescriptionLighting=()=>{
    return dispatch =>{
        dispatch(fadeEfect());
        setTimeout(()=>{
            dispatch(decriptionLighting())
        },400)
    };
};

export const fadeDescriptionInstalation=()=>{
    return dispatch =>{
        dispatch(fadeEfect());
        setTimeout(()=>{
            dispatch(decriptionInstalation())
        },400)
    };
};

export const fadeDescriptionAutomation=()=>{
    return dispatch =>{
        dispatch(fadeEfect());
        setTimeout(()=>{
            dispatch(decriptionAutomation())
        },400)
    };
}

export const fadeDescriptionEnterteinmant=()=>{
    return dispatch =>{
        dispatch(fadeEfect());
        setTimeout(()=>{
            dispatch(decriptionEnterteinmant())
        },400)
    };
}

export const fadeDescriptionVideo=()=>{
    return dispatch =>{
        dispatch(fadeEfect());
        setTimeout(()=>{
            dispatch(decriptionVideo())
        },400)
    };
}

export const fadeDescriptionAlarm=()=>{
    return dispatch =>{
        dispatch(fadeEfect());
        setTimeout(()=>{
            dispatch(decriptionAlarm())
        },400)
    };
}

export const fadeDescriptionNetworks=()=>{
    return dispatch =>{
        dispatch(fadeEfect());
        setTimeout(()=>{
            dispatch(decriptionNetworks())
        },400)
    };
}