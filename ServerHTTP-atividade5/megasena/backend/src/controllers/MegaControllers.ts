import { Request, Response } from "express";
import pool from "./db";

export async function last(req: Request, res: Response) {
    try {
        const result = await pool.query(
            "SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1"
        );
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Erro ao buscar concurso mais recente:", error);
        res.status(500).json({ error: "Erro ao buscar concurso mais recente" });
    }
}

export async function byNumber(req: Request, res: Response) {
    const numero = Number(req.params.numero);
    try {
        const result = await pool.query(
            "SELECT * FROM megasena WHERE concurso = $1",
            [numero]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ mensagem: "Concurso não encontrado" });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Erro ao buscar concurso:", error);
        res.status(500).json({ error: "Erro ao buscar concurso" });
    }
}
