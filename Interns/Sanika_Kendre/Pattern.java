import java.util.*;
public class Pattern{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Pattern");
        System.out.print("Enter N:");
        int n=sc.nextInt();
        for(int i=0;i<n;i++){
            for(int k=0;k<i;k++){
                System.out.print(" ");
            }
            for(int j=0;j<n;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}