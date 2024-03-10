// <<<<<<< HEAD
// import React from "react";
// import AppSider from "../../components/AppSider/AppSider.jsx";
// import { Layout } from "antd";
// =======
import React from 'react';
import AppSider from "../../components/AppSider/AppSider.jsx";
import {Layout} from "antd";

import AppHeader from "../../components/AppHeader/AppHeader.jsx";
// import BranchContent from "../../components/BranchContent/BranchContent.jsx";
import WarehouseContent from "../../components/WarehouseContent/WarehouseContent.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../redux/slices/modalSlice.js';
// import NewCategoryModal from '../../components/modals/NewCategoryModal/NewCategoryModal.jsx';
import CreateNewProductModal from '../../components/modals/CreateNewProductModal/CreateNewProductModal.jsx';

// <<<<<<< HEAD
// function WarehousePage(props) {
//   return (
//     <Layout>
//       <AppSider />
//       <Layout>
//         <AppHeader title="Склад" />
//         <WarehouseContent />
//       </Layout>
//     </Layout>
//   );
// }

// export default WarehousePage;

function WarehousePage(props) {
    const dispatch = useDispatch()
 const handleCreateBtnClick =()=> {
    dispatch(showModal({modalType:"createNewProductModal"}))
 }
    
 const {currentModal}= useSelector((state)=>state.modal)
 
    return (
        <Layout>
            <AppSider />
            <Layout>
                <AppHeader title="Склад" onCreateBtnClick={handleCreateBtnClick}/>
                <WarehouseContent />
                {currentModal==='createNewProductModal' && <CreateNewProductModal/>}
            </Layout>
        </Layout>
    );
}

export default WarehousePage;

