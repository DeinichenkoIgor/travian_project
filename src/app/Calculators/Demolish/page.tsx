"use client";
import TableComponent from '../../components/Demolish/TableComponent'
import CatapultRamBtn from '../../components/Demolish/CatapultRamBtn'

export default function Demolish() {

   return (
      <div className='flex flex-col gap-[10px]'>
         <div>Заголовок</div>

         <div>Описание</div>
         <CatapultRamBtn />
         <TableComponent />
      </div>
   )
}
