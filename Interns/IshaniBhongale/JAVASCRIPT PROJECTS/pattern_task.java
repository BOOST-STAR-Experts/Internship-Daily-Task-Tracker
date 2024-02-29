import java.util.Scanner;

class pattern { // PATTERN PROGRAM IN JAVA
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of rows: ");
        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) { // OUTER-FOR LOOP
            for (int j = 1; j < i; j++) {
                System.out.print(" "); // INNER FOR-LOOP1- TO PRINT " ****"
            }
            for (int k = 1; k <= n; k++) {
                System.out.print("*"); // INNER FOR LOOP2- TO PRINT "****"
            }
            System.out.println(); // TO GO TO THE NEXT-LINE
        }
    }
}