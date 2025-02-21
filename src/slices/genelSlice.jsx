import {createSlice} from '@reduxjs/toolkit' // Redux Toolkit'ten createSlice fonksiyonunu içe aktarıyoruz.

const initialState = {
    sidebarClose:false, //Sidebar açık mı kapalı mı olduğunu takip ediyoruz
    message: "", //Sidebar açılıp kapandığında edeğişen mesaj durumu
}

export const genelSlice = createSlice({
    name:"genelState", //Slice'ın ismi
    initialState, // Başlangıç durumunu belirtiyoruz
    reducers: { //Reducer fonksiyonlarını tanılmıyoruz
        reset :(state) => {
            state.sidebarClose = false; //Sidebar'ı kapalı duruma getiriyoruz
            state.message = ""; //Mesajı sıfırladık
        },
        setSideBar:(state,action)=> {
            state.sidebarClose = action.payload // Sidebar açık/kapalı durum güncellemesi
            if(action.payload === true){
                state.message = "Açıldı" // Sidebar açıldığında mesajı güncelleme
            }else{
                state.message = "Kapandı" //Kapandığında güncelleme
            }
        }
    }
})

export const {reset, setSideBar} = genelSlice.actions //Reducer fonksiyonlarını dışa aktardık
export default genelSlice.reducer // Slice'ın reducer'ını dışa aktarıyoruz