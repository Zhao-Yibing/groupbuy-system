import { useState } from 'react'
import { createGroup } from '../api/groups'


export default function AddGroup() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [msg, setMsg] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setMsg('')
        try {
            const res = await createGroup({ title, description })
            setMsg(`已创建：#${res.data?.id || '?'} ${res.data?.title || title}`)
            setTitle(''); setDescription('')
        } catch (e) {
            setMsg(e?.response?.data?.message || e.message)
        } finally {
            setSubmitting(false)
        }
    }


    return (
        <div className="page">
            <header className="header"><h1>添加团</h1></header>
            <form onSubmit={handleSubmit} className="form">
                <label>
                    标题
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="例如：2025 夏季周边拼团" required />
                </label>
                <label>
                    描述
                    <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="可填写时间范围、规则、收货说明等" rows={4} />
                </label>
                <button type="submit" disabled={submitting}>{submitting ? '创建中...' : '创建'}</button>
                {msg && <p className="hint">{msg}</p>}
            </form>
            <div style={{ height: 70 }} />
        </div>
    )
}