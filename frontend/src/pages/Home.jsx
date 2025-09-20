import { useEffect, useState } from 'react'
import { listGroups } from '../api/groups'


export default function Home() {
    const [groups, setGroups] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')


    useEffect(() => {
        let mounted = true
        setLoading(true)
        listGroups()
            .then((res) => {
                if (!mounted) return
                setGroups(res.data || [])
            })
            .catch((e) => setError(e?.response?.data?.message || e.message))
            .finally(() => setLoading(false))
        return () => (mounted = false)
    }, [])


    return (
        <div className="page">
            <header className="header">
                <h1>Homepage</h1>
            </header>


            {loading && <p>加载中...</p>}
            {error && <p style={{color:'red'}}>错误：{error}</p>}


            <ul className="list">
                {groups.map((g) => (
                    <li key={g.id} className="card">
                        <div className="card-title">{g.title}</div>
                        <div className="card-sub">团长：{g.ownerName || g.ownerId}</div>
                        <div className="card-desc">{g.description || '—'}</div>
                    </li>
                ))}
                {!loading && !error && groups.length === 0 && (
                    <li className="empty">还没有团，点击下方“添加团”开始吧～</li>
                )}
            </ul>


            <div style={{ height: 70 }} />
        </div>
    )
}

