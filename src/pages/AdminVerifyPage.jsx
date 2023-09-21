
import DataTable from 'react-data-table-component';
import AdminNav from '../components/AdminNav';
import Card from '../components/Card';
import Button from '../components/Button'
import styles from './AdminVerifyPage.module.css'

function AdminVerifyPage() {

    const columns = [
        {
            name: 'Sl no.',
            selector: row => row.id,
        },
        {
            name: 'Requested on',
            selector: row => row.date,
            sortable:true,
            grow:2
        },
        {
            name: 'Title',
            selector: row => row.title,
            grow:2
        },
        {
            name: 'Authors',
            selector: row => row.author,
        },
        {
            name: 'Domain',
            selector: row => row.domain,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable:true,
        },
        {
            name: 'Action',
            selector: row => row.btn,
        },
        
    ];
    
    const data = [
        {
            id: 1,
            title: 'Automated Greenhouse Monitoring System',
            date:'20-09-2023 07:23PM',
            author: 'Shivani Singh',
            domain: 'IOT',
            status: '🟢Completed',
            btn: <Button>Details</Button>,
        },
        {
            id: 2,
            title: 'AI-Powered Healthcare Chatbot',
            date:'20-09-2023 07:30PM',
            author: 'Ankit Shaw',
            domain: 'AIML',
            status: '🟢Completed',
            btn: <Button path="/verify-details">Details</Button>,
        },
    ]

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                color: '#494964',
                fontWeight: '700',
                backgroundColor: '#dcd3fd',
                fontSize:'1.1rem',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
                fontSize:'1rem'
            },
        },
    };

    return (
        <div className="pages">
            <AdminNav />
            <div className={styles.main} style={{marginTop: '1.8rem'}}>
                <Card>
                    <h2>List of Project Verification Request</h2>
                    <div className={styles.table}>
                        <DataTable
                        columns={columns}
                        data={data}
                        customStyles={customStyles}
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default AdminVerifyPage




