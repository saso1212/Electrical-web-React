import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utitliy';

const initialState={
    data:null,
    class:{
        automation:null,
        instalation:null,
        lighting:null,
        networks:null,
        alarm:null,
        video:null,
        enterteinmant:null
    },
    show:false,
    firstPageShow:true,
    mainClass:"active"
}
const DECRIPTION_TEXT=["ELECTRICAL INSTALLATIONS: DESIGN AND EXECUTION OF ELECTRICAL INSTALLATIONS IN INDUSTRIAL, BUSINESS AND RESIDENTIAL OBJECTS APPLICABLE TO THE HIGHEST STANDARDS AND QUALITY. PROVISION OF HIGH AND LOW STRUCTURAL INSTALLATIONS ACCORDING TO YOUR NEEDS AND REQUIREMENTS.",
"LIGHTING: DESIGN AND PROMOTION OF LIGHTING IN RESIDENT, INDUSTRIAL AND BUSINESS OBJECTS. HIDDEN LIGHTING, MAIN LIGHTING, AMBIENTAL LIGHTING IMPLEMENTING HIGH QUALITY LIGHTS",
"COMPUTER NETWORKS: PROVISION OF COMPUTER AND DLNA NETWORKS FOR SERVER, VIDEO SUPERVISION AND COMPUTER STATIONS.",
"ENTERTAINMENT SYSTEMS: PROJECT AND DESIGN OF SYSTEMS FOR ENTERTAINMENT, HOME CINEMA, AUDIO AND VIDEO TECHNOLOGY.",
"AUTOMATION: PROJECT AND DESIGN OF AUTOMATICS FOR DIFFERENT CONTROL SYSTEMS WHICH REQUEST AUTOMATIC MANAGEMENT AND REGULATION",
"VIDEO SUPERVISION: DESIGN AND IMPLEMENTATION OF VIDEO SUPERVISORY SYSTEMS, DOMOPHONE SYSTEMS AND ACCESS CONTROL SYSTEMS, PERIMITARY PROTECTION FOR INTERNAL AND EXTERNAL SECURITY",
"ALARM SYSTEMS: ALARM PROTECTION SYSTEMS FOR FIRE PROTECTION, CONCENTRATION OF GASES AND PROTECTION PROTECTION SYSTEMS."]

const reducer=(state=initialState,action)=>{
   // const state=updateObject(...state.class,{automation:null,instalation:null,lighting:null,networks:null,alarm:null,video:null,enterteinmant:null})
    switch (action.type){
        case actionTypes.DESCRIPTION_INSTALLATION:
        const updatedClassInstalation=updateObject(state,{instalation:"active"})
        return updateObject(state,{data:DECRIPTION_TEXT[0],mainClass:null,show:true,class:updatedClassInstalation,firstPageShow:false})
        case actionTypes.DESCRIPTION_LIGHTING :
        const updatedClass=updateObject(state,{lighting:"active"})
        return updateObject(state,{data:DECRIPTION_TEXT[1],mainClass:null,show:true,firstPageShow:false,class:updatedClass})
        case actionTypes.DECRITPION_NETWORKS:
        const updatedClassNetwork=updateObject(state,{networks:"active"})
        return updateObject(state,{data:DECRIPTION_TEXT[2],mainClass:null,show:true,firstPageShow:false,class:updatedClassNetwork})
        case actionTypes.DESCRIPTION_ENTERTEINMANT :
        const updatedClassEnterteinment=updateObject(state,{enterteinmant:"active"})
        return updateObject(state,{data:DECRIPTION_TEXT[3],mainClass:null,show:true,firstPageShow:false,class:updatedClassEnterteinment})
        case actionTypes.DESCRIPTION_AUTOMATION:
        const updatedClassAutomation=updateObject(state,{automation:"active"})
        return updateObject(state,{data:DECRIPTION_TEXT[4],mainClass:null,show:true,firstPageShow:false,class:updatedClassAutomation})
        case actionTypes.DECRITPTION_VIDEO:
        const updatedClassVideo=updateObject(state,{video:"active"})
        return updateObject(state,{data:DECRIPTION_TEXT[5],mainClass:null,show:true,firstPageShow:false,class:updatedClassVideo})
        case actionTypes.DECRIPTION_ALARM:
        const updatedClassAlarm=updateObject(state,{alarm:"active"})
        return updateObject(state,{data:DECRIPTION_TEXT[6],mainClass:null,show:true,firstPageShow:false,class:updatedClassAlarm})
        case actionTypes.FADE_EFECT :
        return updateObject(state,{show:false,firstPageShow:false})
        default:
        return {
            ...state
        }
    }
}

export default reducer;

