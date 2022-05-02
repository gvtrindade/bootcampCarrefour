package DI;

public class Condutor {

    public static void main(String[] args) {
        Condutor condutor = new Condutor(new Moto());
        condutor.automovel();
    }

    private Veiculo veiculo;

    public Condutor(Veiculo obj){
        this.veiculo = obj;
    }

    private void automovel(){
        veiculo.acao();
    }

}
