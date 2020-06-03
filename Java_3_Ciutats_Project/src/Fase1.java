import java.util.Scanner;

public class Fase1 {

	public static String[] executar() {
		
		System.out.println("------");
		System.out.println("FASE 1");
		System.out.println("------");
		
		String [] ciutats = new String[6];
		
		Scanner entrada = new Scanner(System.in);
		
		//Es demana per consola introduir el nom de 6 ciutats
		
		for (int i=0;i<6;i++) {
			System.out.println("Introdueix un nou nom de ciutat: ");
			ciutats[i] = entrada.nextLine();
		}
		
		entrada.close();
		
		//Es mostra per consola els noms de ciutats introduïts
		
		System.out.println("Els noms de ciutats que has introduït són:");
		
		for (String c : ciutats) {
			System.out.print(c +", ");
		}
		
		System.out.println();
		
		return ciutats;
	}

}
