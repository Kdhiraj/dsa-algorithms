import java.util.Collections;
import java.util.List;

public class ArrayList {
    public static void main(String[] args) {
        List<Integer> list = new java.util.ArrayList<>(); //create a list of array which accept integer
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(5);
        list.add(3, 4);
        Collections.reverse(list); //reverse an array
        System.out.println(list);

        List<Integer> newList = new java.util.ArrayList<>();
        newList.add(100);
        newList.add(77);
        list.addAll(newList);
        System.out.println(newList);
        System.out.println(list);
        System.out.println(list.get(4));
    }
}
