export type Produto = {
    id: number;
    nome: string;
    descriçãoCurta: string;
    descriçãoLonga: string;
    preçoPorKg: number;
    ativo: boolean;
    imagem: string;
    categoriaIds: number[]
}