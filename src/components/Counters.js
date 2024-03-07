import RestoreIcon from '@mui/icons-material/Restore';
import RecyclingIcon from '@mui/icons-material/Recycling';
const Counters=({onReset, onRefresh})=>{
return (
    <>
    <div className='counters'>
    <div className='refresh-icon'onClick={()=>onRefresh()}><RestoreIcon/></div>
    <div className='recycle-icon'onClick={()=>onReset()}><RecyclingIcon/></div>
    </div>
    </>
)


}
export default Counters;