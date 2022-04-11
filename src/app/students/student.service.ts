import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const STUDENTS_QUERY = gql`
  query {
    students {
      id
      firstName
      lastName
    }
  }
`;

const NEW_STUDENT_MUTATION = gql`
  mutation AddStudent($firstName: String!, $lastName: String!) {
    newStudent(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private apollo: Apollo) {}

  getStudents() {
    return this.apollo.watchQuery({
      query: STUDENTS_QUERY
    });
  }

  addStudent(firstName: string, lastName: string) {
    return this.apollo.mutate({
      mutation: NEW_STUDENT_MUTATION,
      refetchQueries: [{
        query: STUDENTS_QUERY
      }],
      variables: {
        firstName,
        lastName
      }
    });
  }

}
