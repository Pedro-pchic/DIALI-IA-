export const mails = [['cliente@empresa.com','Consulta sobre cotización','Cliente','blue'],['soporte@empresa.com','Problema con acceso','Soporte','orange'],['ventas@empresa.com','Solicitud de información','Ventas','green'],['gerencia@empresa.com','Reporte financiero','Interno','purple'],['rrhh@empresa.com','Documentación pendiente','RRHH','pink'],['proveedor@empresa.com','Actualización de contrato','Proveedor','orange'],['noreply@sistema.com','Notificación del sistema','Sistema','neutral']].map(([sender,subject,category,color],i)=>({id:i+1,sender,subject,category,color,time:['10:45','10:32','09:58','09:30','09:12','Ayer','Ayer'][i],important:i===0||i===3,sent:false}))

export const documents = ['Contrato_Servicio.pdf','Factura_001.pdf','Reporte_Financiero_Q2.xlsx','Politicas_Empresa.pdf','Manual_Usuario.docx','Acta_Reunion.pdf'].map((name,i)=>({id:i+1,name,type:name.endsWith('xlsx')?'Excel':name.endsWith('docx')?'Word':'PDF',date:`2026-09-0${5-i%5}`}))

export const users = [['Pedro Chic','pedro','Administrador'],['Ana López','ana','Analista'],['Carlos Pérez','carlos','Soporte'],['María Gómez','maria','Gerente'],['Luis Ramírez','luis','Finanzas']].map(([name,email,role],i)=>({id:i+1,name,email:`${email}@empresa.com`,role,active:i!==4}))

const activity = [
  ['Pedro Chic','Consulta RAG ejecutada','Asistente IA'],
  ['Ana López','Documento clasificado','Documentos'],
  ['Ana López','Datos extraídos de factura','Documentos'],
  ['María Gómez','Anomalía financiera detectada','Analítica'],
  ['Diali IA','Recomendación generada','Analítica'],
  ['Sistema','Sincronización ERP','Configuración'],
  ['Sistema','Sincronización CRM','Configuración'],
  ['Pedro Chic','Acceso administrativo','Seguridad']
]

export const logs = activity.map(([user,event,module],i)=>({
  user,
  action:event,
  description:event,
  module,
  status:'Completado',
  ip:`192.168.1.${10+i}`,
  date:'2026-09-05',
  time:`${String(10-Math.floor(i/3)).padStart(2,'0')}:${String(45-i*5).padStart(2,'0')}`
}))
