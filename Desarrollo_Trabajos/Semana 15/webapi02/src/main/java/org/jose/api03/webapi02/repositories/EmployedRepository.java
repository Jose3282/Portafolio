package org.jose.api03.webapi02.repositories;

import org.jose.api03.webapi02.models.EmployedModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployedRepository extends CrudRepository<EmployedModel,Long> {

}
